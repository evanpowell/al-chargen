class rulebookOptimizer {
  optimizedRulebookData = {};

  optimizeLibrary(lib, libName) {
    const optimizedLib = {};

    lib.forEach((libItem) => {
      optimizedLib[libItem.libId] = libItem;
    });
  
    this.optimizedRulebookData[libName] = optimizedLib;
  }

  optimizeNonLibCollection(collection, collectionName) {
    this.optimizedRulebookData[collectionName] = collection.map((collectionItem) => {
      return this.convertLibIdsToLibItems(collectionItem);
    });
  }

  convertLibIdsToLibItems(collectionItemOrInnerValue) {
    
    if (Array.isArray(collectionItemOrInnerValue)) {

      return collectionItemOrInnerValue.map((item) => {
        return this.convertLibIdsToLibItems(item);
      });

    } else if (typeof collectionItemOrInnerValue === 'object') {
      const convertedCollectionItem = {};

      Object.entries(collectionItemOrInnerValue).forEach(([key, value]) => {
        if (key.includes('LibId')) {
          const libName = key.slice(key.length - 2) + 'Item';
          convertedCollectionItem[libName] = this.optimizedRulebookData[libName][value];
        } else {
          convertedCollectionItem[key] = this.convertLibIdsToLibItems(value);
        }
      });

      return convertedCollectionItem;
    }

    return collectionItemOrInnerValue;
  }

}

module.exports = {
  rulebookOptimizer
}
