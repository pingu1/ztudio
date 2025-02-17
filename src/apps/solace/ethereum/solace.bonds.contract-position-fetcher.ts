import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { SolaceBondsContractPositionFetcher } from '../common/solace.bonds.contract-position-fetcher';

@PositionTemplate()
export class EthereumSolaceBondsContractPositionFetcher extends SolaceBondsContractPositionFetcher {
  groupLabel = 'Bonds';
  bondTellerAddresses = [
    '0x501ace677634fd09a876e88126076933b686967a', // DAI Bond
    '0x501ace95141f3eb59970dd64af0405f6056fb5d8', // ETH Bond
    '0x501ace7e977e06a3cb55f9c28d5654c9d74d5ca9', // USDC Bond
    '0x501acef0d0c73bd103337e6e9fd49d58c426dc27', // WBTC Bond
    '0x501ace5ceec693df03198755ee80d4ce0b5c55fe', // USDT Bond
    '0x501ace00fd8e5db7c3be5e6d254ba4995e1b45b7', // SCP Bond
    '0x501acef4f8397413c33b13cb39670ad2f17bfe62', // FRAX Bond
  ];
}
