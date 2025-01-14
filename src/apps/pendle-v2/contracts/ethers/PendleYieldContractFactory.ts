/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface PendleYieldContractFactoryInterface extends utils.Interface {
  functions: {
    'expiryDivisor()': FunctionFragment;
    'getPT(address,uint256)': FunctionFragment;
    'getYT(address,uint256)': FunctionFragment;
    'interestFeeRate()': FunctionFragment;
    'isPT(address)': FunctionFragment;
    'isYT(address)': FunctionFragment;
    'rewardFeeRate()': FunctionFragment;
    'treasury()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'expiryDivisor'
      | 'getPT'
      | 'getYT'
      | 'interestFeeRate'
      | 'isPT'
      | 'isYT'
      | 'rewardFeeRate'
      | 'treasury',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'expiryDivisor', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPT', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getYT', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'interestFeeRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isPT', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'isYT', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardFeeRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'treasury', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'expiryDivisor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getYT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'interestFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isPT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isYT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'treasury', data: BytesLike): Result;

  events: {
    'CreateYieldContract(address,uint256,address,address)': EventFragment;
    'SetExpiryDivisor(uint256)': EventFragment;
    'SetInterestFeeRate(uint256)': EventFragment;
    'SetRewardFeeRate(uint256)': EventFragment;
    'SetTreasury(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CreateYieldContract'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetExpiryDivisor'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetInterestFeeRate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetRewardFeeRate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetTreasury'): EventFragment;
}

export interface CreateYieldContractEventObject {
  SY: string;
  expiry: BigNumber;
  PT: string;
  YT: string;
}
export type CreateYieldContractEvent = TypedEvent<[string, BigNumber, string, string], CreateYieldContractEventObject>;

export type CreateYieldContractEventFilter = TypedEventFilter<CreateYieldContractEvent>;

export interface SetExpiryDivisorEventObject {
  newExpiryDivisor: BigNumber;
}
export type SetExpiryDivisorEvent = TypedEvent<[BigNumber], SetExpiryDivisorEventObject>;

export type SetExpiryDivisorEventFilter = TypedEventFilter<SetExpiryDivisorEvent>;

export interface SetInterestFeeRateEventObject {
  newInterestFeeRate: BigNumber;
}
export type SetInterestFeeRateEvent = TypedEvent<[BigNumber], SetInterestFeeRateEventObject>;

export type SetInterestFeeRateEventFilter = TypedEventFilter<SetInterestFeeRateEvent>;

export interface SetRewardFeeRateEventObject {
  newRewardFeeRate: BigNumber;
}
export type SetRewardFeeRateEvent = TypedEvent<[BigNumber], SetRewardFeeRateEventObject>;

export type SetRewardFeeRateEventFilter = TypedEventFilter<SetRewardFeeRateEvent>;

export interface SetTreasuryEventObject {
  treasury: string;
}
export type SetTreasuryEvent = TypedEvent<[string], SetTreasuryEventObject>;

export type SetTreasuryEventFilter = TypedEventFilter<SetTreasuryEvent>;

export interface PendleYieldContractFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PendleYieldContractFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    expiryDivisor(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPT(
      SY: PromiseOrValue<string>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    getYT(
      SY: PromiseOrValue<string>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    interestFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    isPT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    isYT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    rewardFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;
  };

  expiryDivisor(overrides?: CallOverrides): Promise<BigNumber>;

  getPT(SY: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  getYT(SY: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  interestFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  isPT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  isYT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  rewardFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  treasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    expiryDivisor(overrides?: CallOverrides): Promise<BigNumber>;

    getPT(SY: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    getYT(SY: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    interestFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    isPT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    isYT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    rewardFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'CreateYieldContract(address,uint256,address,address)'(
      SY?: PromiseOrValue<string> | null,
      expiry?: PromiseOrValue<BigNumberish> | null,
      PT?: null,
      YT?: null,
    ): CreateYieldContractEventFilter;
    CreateYieldContract(
      SY?: PromiseOrValue<string> | null,
      expiry?: PromiseOrValue<BigNumberish> | null,
      PT?: null,
      YT?: null,
    ): CreateYieldContractEventFilter;

    'SetExpiryDivisor(uint256)'(newExpiryDivisor?: null): SetExpiryDivisorEventFilter;
    SetExpiryDivisor(newExpiryDivisor?: null): SetExpiryDivisorEventFilter;

    'SetInterestFeeRate(uint256)'(newInterestFeeRate?: null): SetInterestFeeRateEventFilter;
    SetInterestFeeRate(newInterestFeeRate?: null): SetInterestFeeRateEventFilter;

    'SetRewardFeeRate(uint256)'(newRewardFeeRate?: null): SetRewardFeeRateEventFilter;
    SetRewardFeeRate(newRewardFeeRate?: null): SetRewardFeeRateEventFilter;

    'SetTreasury(address)'(treasury?: PromiseOrValue<string> | null): SetTreasuryEventFilter;
    SetTreasury(treasury?: PromiseOrValue<string> | null): SetTreasuryEventFilter;
  };

  estimateGas: {
    expiryDivisor(overrides?: CallOverrides): Promise<BigNumber>;

    getPT(
      SY: PromiseOrValue<string>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getYT(
      SY: PromiseOrValue<string>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    interestFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    isPT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    isYT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    expiryDivisor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPT(
      SY: PromiseOrValue<string>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getYT(
      SY: PromiseOrValue<string>,
      expiry: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    interestFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isYT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
