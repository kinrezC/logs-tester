module.exports = [
  {
    'constant': true,
    'inputs': [],
    'name': 'num',
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'addOne',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getNum',
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'helloWorld',
    'outputs': [
      {
        'name': '',
        'type': 'string',
      },
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'a',
        'type': 'uint256',
      },
      {
        'name': 'b',
        'type': 'uint256',
      },
    ],
    'name': 'addNumbers',
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
      },
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function',
  },
  {
    'inputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'num',
        'type': 'uint256',
      },
      {
        'indexed': false,
        'name': 'anotherNum',
        'type': 'uint256',
      },
    ],
    'name': 'Added',
    'type': 'event',
  },
];
