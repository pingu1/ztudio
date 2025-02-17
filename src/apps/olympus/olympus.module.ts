import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ArbitrumOlympusGOhmTokenFetcher } from './arbitrum/olympus.g-ohm.token-fetcher';
import { ArbitrumOlympusWsOhmV1TokenFetcher } from './arbitrum/olympus.ws-ohm-v1.token-fetcher';
import { AvalancheOlympusGOhmTokenFetcher } from './avalanche/olympus.g-ohm.token-fetcher';
import { AvalancheOlympusWsOhmV1TokenFetcher } from './avalanche/olympus.ws-ohm-v1.token-fetcher';
import { OlympusContractFactory } from './contracts';
import { EthereumOlympusBondContractPositionFetcher } from './ethereum/olympus.bond.contract-position-fetcher';
import { EthereumOlympusGOhmTokenFetcher } from './ethereum/olympus.g-ohm.token-fetcher';
import { EthereumOlympusSOhmV1TokenFetcher } from './ethereum/olympus.s-ohm-v1.token-fetcher';
import { EthereumOlympusSOhmTokenFetcher } from './ethereum/olympus.s-ohm.token-fetcher';
import { EthereumOlympusWsOhmV1TokenFetcher } from './ethereum/olympus.ws-ohm-v1.token-fetcher';
import { FantomOlympusGOhmTokenFetcher } from './fantom/olympus.g-ohm.token-fetcher';
import { PolygonOlympusGOhmTokenFetcher } from './polygon/olympus.g-ohm.token-fetcher';

@Module({
  providers: [
    OlympusContractFactory,
    ArbitrumOlympusGOhmTokenFetcher,
    ArbitrumOlympusWsOhmV1TokenFetcher,
    AvalancheOlympusGOhmTokenFetcher,
    AvalancheOlympusWsOhmV1TokenFetcher,
    EthereumOlympusBondContractPositionFetcher,
    EthereumOlympusSOhmTokenFetcher,
    EthereumOlympusSOhmV1TokenFetcher,
    EthereumOlympusGOhmTokenFetcher,
    EthereumOlympusWsOhmV1TokenFetcher,
    FantomOlympusGOhmTokenFetcher,
    PolygonOlympusGOhmTokenFetcher,
  ],
})
export class OlympusAppModule extends AbstractApp() {}
