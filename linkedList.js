/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

var linkedListGenerator = function () {
  var getHead = null;
  var getTail = null;

  var newLinkList = {
    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    remove: _remove,
    get: _get,
    insert: _insert
  };

  return newLinkList;

  function _getHead() {
    return getHead;
  }

  function _getTail() {
    return getTail;
  }

  function _add(newValue) {
    var node = {
      value: newValue,
      next: null
    };

    if (getHead === null && getTail === null) {
      getHead = node;
      getTail = getHead;
    } else {
      getTail.next = node;
      getTail = node;
    }

    return node;
  }

  function _remove(index) {

    var preNode = _get(index - 1);
    var postNode = _get(index + 1);

    var currentNode = _get(index);

    if (currentNode === getTail) {
      getTail = preNode;
    }

    if (preNode === undefined) {
      getHead = postNode;
      return true;
    }

    if (!_get(index)) {
      return false;
    }

    preNode.next = postNode;

  }

  function _get(nodeIndex) {
    var currentNode = getHead;

    for (i = 0; i <= nodeIndex; i++) {
      if (i === nodeIndex) {
        return currentNode;
      }

      if(currentNode === getTail) {
        return false;
      }
      currentNode = currentNode.next;
    }

  }

  function _insert(value, index) {
    var currentNode = _get(index);
    var previousNode = _get(index - 1);
    var newNode = {
      value: value,
      next: null
    }

    if (index < 0) {
      return false;
    }

    if (currentNode === false) {
      return false;
    }

    if (index === 0) {
      newNode.next = getHead;
      getHead = newNode;
      return getHead;
    }

    newNode.next = currentNode;
    previousNode.next = newNode;

  }

}

