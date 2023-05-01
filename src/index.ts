import { ApiPromise, Keyring, util } from '@noir/api';

// Transafer
(async () => {
  const api = await ApiPromise.create();
  const keyring = new Keyring({ type: 'sr25519' });
  const alice = keyring.addFromUri('//Alice');
  const bob = util.decodeAddress('ugCQDn2mpP6u7q9_GCzmvVLIq0VusOde1szsIhy1qYVAUzA0')

  console.log((await api.query.system.account(alice.addressRaw)).toHuman());
  console.log((await api.query.system.account(bob)).toHuman());

  console.log((await api.tx.balances.transfer(bob, 10000000000000n).signAndSend(alice)).toHuman());
})();
