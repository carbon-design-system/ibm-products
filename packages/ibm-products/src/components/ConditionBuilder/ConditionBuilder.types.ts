/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TextAreaProps, TextInputProps } from '@carbon/react';
import { CarbonIconType } from '@carbon/react/icons';
import { NumberInputProps } from '@carbon/react/lib/components/NumberInput/NumberInput';
import {
  Dispatch,
  ForwardedRef,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from 'react';

export type LogicalOperator = 'and' | 'or';
export type StatementOperator = 'ifAll' | 'ifAny' | 'unlessAll' | 'unlessAny';

type CoreOperator = 'is';
type NumberOperator = 'greater' | 'greaterEqual' | 'lower' | 'lowerEqual';
type StringOperator = 'startsWith' | 'endsWith';
type ArrayOperator = 'contains';
type OptionOperator = 'oneOf';
type DateOperator = 'before' | 'after';

export type Operator =
  | LogicalOperator
  | StatementOperator
  | CoreOperator
  | NumberOperator
  | StringOperator
  | ArrayOperator
  | OptionOperator
  | DateOperator;

export type OperatorGroups =
  | 'logical'
  | 'statement'
  | 'core'
  | 'number'
  | 'string'
  | 'array'
  | 'option'
  | 'date';

export type Operators = {
  logical: LogicalOperator;
  statement: StatementOperator;
  core: CoreOperator;
  number: NumberOperator;
  string: StringOperator;
  array: ArrayOperator;
  option: OptionOperator;
  date: DateOperator;
};

export type PropertyConfigOption = {
  type: 'option';
  config?: {
    options?: {
      id: string;
      label: string;
      icon?: CarbonIconType;
    }[];
  };
};

export interface PropertyConfigText {
  type: 'text';
  config: TextInputProps;
}

export interface PropertyConfigTextArea {
  type: 'textarea';
  config: TextAreaProps;
}

export interface PropertyConfigNumber {
  type: 'number';
  config: {
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
  } & NumberInputProps;
}

export type PropertyConfigDate = {
  type: 'date';
  config: object;
};

export type PropertyConfigTime = {
  type: 'time';
  config: {
    timeZones: string[];
  };
};

export type PropertyConfigCustom = {
  type: 'custom';
  config: {
    component: React.ComponentType<any>;
    operators: {
      label: string;
      id: string;
    }[];
  };
};

export type PropertyConfig = {
  option: PropertyConfigOption;
  text: PropertyConfigText;
  textarea: PropertyConfigTextArea;
  number: PropertyConfigNumber;
  date: PropertyConfigDate;
  time: PropertyConfigTime;
  custom: PropertyConfigCustom;
};

export type Property = {
  id: string;
  label: string;
  icon?: CarbonIconType;
} & (
  | PropertyConfig['option']
  | PropertyConfig['text']
  | PropertyConfig['number']
  | PropertyConfig['date']
  | PropertyConfig['textarea']
  | PropertyConfig['time']
  | PropertyConfig['custom']
);

export type inputConfig = {
  properties: Property[];
};

export type Option = {
  id: string;
  label: string;
  icon?: CarbonIconType;
};
export type Condition = {
  property?: string;
  operator?: Operator | '' | 'INVALID';
  value?: string | Option[] | Option;
  id?: string | number;
  popoverToOpen?: string;
};

export type ConditionGroup = {
  conditions?: (ConditionGroup | Condition)[];
  groupOperator?: LogicalOperator;
  statement?: StatementOperator;
  id: string;
};

export type ConditionBuilderState = {
  groups?: ConditionGroup[];
  operator?: LogicalOperator;
};

export type Action = {
  id?: string | number;
  label?: string;
};

export type variantsType = 'Non-Hierarchical' | 'Hierarchical';

export type ConditionBuilderProps = {
  inputConfig: inputConfig;
  initialState?: ConditionBuilderState;
  getActionsState?: (state: Action[] | undefined) => void;
  getConditionState: (state: ConditionBuilderState | undefined) => void;
  getOptions?: (
    state: ConditionBuilderState,
    condition: Condition
  ) => Promise<Option[]>;
  actions?: Action[];
  className?: string;
  popOverSearchThreshold: number;
  startConditionLabel: string;
  variant?: 'Non-Hierarchical' | 'Hierarchical';
  translateWithId: (id: string) => string;
};

export interface ConditionBuilderContextInputProps extends PropsWithChildren {
  children?: ReactNode;
  inputConfig?: inputConfig;
  popOverSearchThreshold?: number;
  getOptions?: (
    state: ConditionBuilderState,
    condition: Condition
  ) => Promise<Option[]>;
  variant?: string;
  translateWithId?: (id: string) => string;

  conditionBuilderRef?: ForwardedRef<HTMLDivElement>;
}

export type ConditionBuilderContextProps = {
  rootState?: ConditionBuilderState;
  setRootState?: Dispatch<SetStateAction<ConditionBuilderState>>;
  actionState?: Action[];
  setActionState?: Dispatch<SetStateAction<Action[]>>;
} & ConditionBuilderContextInputProps;
