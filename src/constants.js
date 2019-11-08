import { Web3Versions, SourceType } from "@terminal-packages/sdk";
import { Bitski } from "bitski";
import Portis from "@portis/web3";
import ProviderEngine from "web3-provider-engine";
import Torus from "@toruslabs/torus-embed";
import SafeProvider from "safe-web3-provider";
import Fortmatic from "fortmatic";

const apiKey = "Z0CsA9B5xAkCjfw0kcKh6g==";
const projectId = "bYzPZdjZezVQKvLA";

const bitski = new Bitski("d56192ce-8a28-4aaa-9b3e-66b83b3dbbca");
const fm = new Fortmatic("pk_live_B83377C416C361E1", "mainnet");
const portis = new Portis("486b2a54-3e4a-43fe-be5e-827a33750d0e", "mainnet");

// Torus requires an initialization step
export const torus = new Torus();

const bitskiProvider = bitski.getProvider();
const fmProvider = fm.getProvider();
const portisProvider = portis.provider;

export const web3ProviderEngine = new ProviderEngine();

const baseObject = {
  apiKey: apiKey,
  projectId: projectId
};

const gProvider = new SafeProvider({
  rpcUrl: "https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e"
});

const infura = "https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e";
const radar =
  "https://shared-parity-mainnet.nodes.deploy.radar.tech/?apikey=efc25932091f9925e2cd73814c76cebc8ad561e3cf040aab";

const schainEndpoint = "http://sip1.skalenodes.com:10046";

export const bitskiObject = {
  ...baseObject,
  customHttpProvider: bitskiProvider,
  source: "Bitski"
};

export const fmObject = {
  ...baseObject,
  customHttpProvider: fmProvider,
  source: "Fortmatic"
};

export const portisObject = {
  ...baseObject,
  customHttpProvider: portisProvider,
  source: SourceType.Portis
};

export const torusObject = {
  ...baseObject,
  customHttpProvider: torus.provider,
  source: SourceType.Torus,
  web3Version: Web3Versions.one
};

export const infuraObject = {
  ...baseObject,
  host: infura,
  source: SourceType.Infura
};

export const radarObject = {
  ...baseObject,
  host: radar,
  source: "Radar"
};

export const gnosisObject = {
  ...baseObject,
  customHttpProvider: gProvider,
  source: "GnosisSafe",
  web3Version: Web3Versions.one
};

export const web3ProviderEngineObject = {
  ...baseObject,
  customHttpProvider: web3ProviderEngine,
  source: SourceType.Web3ProviderEngine,
  web3Version: Web3Versions.one
};

export const skaleObject = {
  ...baseObject,
  host: schainEndpoint,
  source: "SKALE"
};

export const providers = [
  { input: bitskiObject, name: "Bitski Test" },
  { input: fmObject, name: "Fortmatic Test" },
  { input: portisObject, name: "Portis Test" },
  { input: infuraObject, name: "Infura Test" },
  { input: radarObject, name: "Radar Test" },
  { input: gnosisObject, name: "Gnosis Test" },
  { input: web3ProviderEngineObject, name: "Provider Engine Test" },
  { input: skaleObject, name: "Skale Test" }
];
