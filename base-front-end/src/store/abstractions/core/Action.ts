import { ActionContext } from 'vuex'
import { ActionType } from '@/store/abstractions/core/types/ActionType';
import { Mutation } from '@/store/abstractions/core/Mutation';
import { State } from '@/store/abstractions/state';

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutation<State>>(
        key: K,
        payload?: Parameters<Mutation<State>[K]>[1]
    ): ReturnType<Mutation<State>[K]>;
};

export interface Action<TModel> {
    [ActionType.AddAsync](context: ActionAugments, payload: TModel): Promise<void>;
    [ActionType.InitializeAsync](context: ActionAugments): Promise<void>;
};