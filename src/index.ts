import { ApiPromise, WsProvider, Keyring } from "@pinot/api";
import { decodeAddress } from "@pinot/util";

// Transafer
(async () => {
  // const provider = new WsProvider("ws://dev.lenoir.io");
  const provider = new WsProvider("ws://127.0.0.1:9944");
  const api = await ApiPromise.create({ provider });
  const keyring = new Keyring({ type: "sr25519" });
  const alice = keyring.addFromUri("//Alice");
  const bob = decodeAddress("u5wEDEw1cvmFa6zy5RnBBAtdLgVF1TILwuF4evZBDlQRUClM");

  console.log((await api.query.system.account(alice.addressRaw)).toHuman());
  console.log((await api.query.system.account(bob)).toHuman());

  // console.log(
  //   (
  //     await api.tx.balances.transfer(bob, 1000000000000000n).signAndSend(alice)
  //   ).toHuman()
  // );
})();
