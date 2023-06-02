import { ApiPromise, WsProvider, Keyring } from '@pinot/api';
import { decodeAddress } from '@pinot/util';

// Transafer
(async () => {
  const provider = new WsProvider('wss://dev.lenoir.io');
  const api = await ApiPromise.create({ provider });
  const keyring = new Keyring({ type: 'sr25519' });
  const alice = keyring.addFromUri('//Alice');
  const bob = decodeAddress('ugCQCNNaa_iu2h-wwd6ierrcc2APH8IZI1azc087F_P8-IAo')

  console.log((await api.query.system.account(alice.addressRaw)).toHuman());
  console.log((await api.query.system.account(bob)).toHuman());

  // console.log((await api.tx.balances.transfer(bob, 1152920000000000000n).signAndSend(alice)).toHuman());
})();
