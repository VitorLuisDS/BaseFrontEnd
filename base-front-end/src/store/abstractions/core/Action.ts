import { ActionContext } from 'vuex'
import { ActionsTypes } from '@/store/abstractions/core/types/ActionsTypes';
import { Mutation } from '@/store/abstractions/core/Mutation';
import { State } from '@/store/abstractions/state';

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutation<State>>(
        key: K,
        payload?: Parameters<Mutation<State>[K]>[1]
    ): ReturnType<Mutation<State>[K]>;
};

export interface Action<TModel> {
    [ActionsTypes.AddAsync](context: ActionAugments, payload: TModel): Promise<void>;
    [ActionsTypes.InitializeAsync](context: ActionAugments): Promise<void>;
};