const { ApiPromise, WsProvider } = require('@polkadot/api');

(async() => {
  const rpc = process.env.RPC || 'ws://127.0.0.1:9944';
  const wsProvider = new WsProvider(rpc);
  const api = await ApiPromise.create({ provider: wsProvider });

  await api.isReady;

  const accountId = process.env.AccountId || '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
  const now = await api.query.timestamp.now();
  const { data: balance } = await api.query.system.account(accountId);

  console.log(`\n
    ${new Date(now.toNumber()).toString()},\n
    Balance of ${accountId} is:\n
    Free: ${balance.free}\n
    Reserved: ${balance.reserved}\n
    Misc Frozen: ${balance.miscFrozen}\n
    Fee Frozen: ${balance.feeFrozen}\n
  `);

  process.exit(0);
})();