# Account balance

This project is used to show balance details of a specific account.

Docs: [AccountData Trait and Implementation](https://substrate.dev/docs/en/knowledgebase/advanced/account-info#accountdata-trait-and-implementation)

## Run project

Install package dependencies

```
npm i
```

Run

```
node index.js

//or
npm start
```

you can enter environments variable:

- `RPC`: Web socket provider, default ws://127.0.0.1

- `AccountId`: account id, formatted type is ss58, default `5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY` (Alice)

```
RPC=ws://127.0.0.1:9944 AccountId=5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY node index.js

// or
RPC=ws://127.0.0.1:9944 AccountId=5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY npm start
```

Output like:

```
    Tue Sep 14 2021 10:05:30 GMT+0700 (Indochina Time),

    Balance of 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY is:

    Free: 20000000000000000

    Reserved: 0

    Misc Frozen: 10000000000000000

    Fee Frozen: 10000000000000000
```