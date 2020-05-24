import { GraphQLResolveInfo } from 'graphql';
import { User, Post, PublicComment, PrivateComment } from '../object';
export type Maybe<T> = T | null;
export type ResolverFn<TResult, TParent, TContext, TArgs> = ((
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult) |
 ((
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
 ) => Promise<TResult> | TResult);

export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GraphQLUser = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  post: GraphQLPost;
  posts: Array<GraphQLPost>;
};


export type GraphQLUserPostArgs = {
  id: Scalars['String'];
};

export type GraphQLPost = {
  __typename?: 'Post';
  id: Scalars['ID'];
  content: Scalars['String'];
  comments: Array<GraphQLComment>;
};

export type GraphQLComment = {
  id: Scalars['ID'];
  content: Scalars['String'];
};

export type GraphQLPublicComment = GraphQLComment & {
  __typename?: 'PublicComment';
  id: Scalars['ID'];
  content: Scalars['String'];
};

export type GraphQLPrivateComment = GraphQLComment & {
  __typename?: 'PrivateComment';
  id: Scalars['ID'];
  content: Scalars['String'];
};

export type GraphQLQuery = {
  __typename?: 'Query';
  user: GraphQLUser;
};


export type GraphQLQueryUserArgs = {
  id: Scalars['String'];
};

export type GraphQLMutation = {
  __typename?: 'Mutation';
  updateUser: GraphQLUser;
};


export type GraphQLMutationUpdateUserArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GraphQLResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Post: ResolverTypeWrapper<Post>;
  Comment: GraphQLResolversTypes['PublicComment'] | GraphQLResolversTypes['PrivateComment'];
  PublicComment: ResolverTypeWrapper<PublicComment>;
  PrivateComment: ResolverTypeWrapper<PrivateComment>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GraphQLResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  User: User;
  ID: Scalars['ID'];
  Post: Post;
  Comment: GraphQLResolversParentTypes['PublicComment'] | GraphQLResolversParentTypes['PrivateComment'];
  PublicComment: PublicComment;
  PrivateComment: PrivateComment;
  Query: {};
  Mutation: {};
};

export type GraphQLUserResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['User'] = GraphQLResolversParentTypes['User']> = {
  id?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<GraphQLResolversTypes['Post'], ParentType, ContextType, RequireFields<GraphQLUserPostArgs, 'id'>>;
  posts?: Resolver<Array<GraphQLResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type GraphQLPostResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Post'] = GraphQLResolversParentTypes['Post']> = {
  id?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Array<GraphQLResolversTypes['Comment']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type GraphQLCommentResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Comment'] = GraphQLResolversParentTypes['Comment']> = {
  __resolveType: TypeResolveFn<'PublicComment' | 'PrivateComment', ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
};

export type GraphQLPublicCommentResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['PublicComment'] = GraphQLResolversParentTypes['PublicComment']> = {
  id?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type GraphQLPrivateCommentResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['PrivateComment'] = GraphQLResolversParentTypes['PrivateComment']> = {
  id?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type GraphQLQueryResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Query'] = GraphQLResolversParentTypes['Query']> = {
  user?: Resolver<GraphQLResolversTypes['User'], ParentType, ContextType, RequireFields<GraphQLQueryUserArgs, 'id'>>;
};

export type GraphQLMutationResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Mutation'] = GraphQLResolversParentTypes['Mutation']> = {
  updateUser?: Resolver<GraphQLResolversTypes['User'], ParentType, ContextType, RequireFields<GraphQLMutationUpdateUserArgs, 'id'>>;
};

export type GraphQLResolvers<ContextType = any> = {
  User?: GraphQLUserResolvers<ContextType>;
  Post?: GraphQLPostResolvers<ContextType>;
  Comment?: GraphQLCommentResolvers;
  PublicComment?: GraphQLPublicCommentResolvers<ContextType>;
  PrivateComment?: GraphQLPrivateCommentResolvers<ContextType>;
  Query?: GraphQLQueryResolvers<ContextType>;
  Mutation?: GraphQLMutationResolvers<ContextType>;
};


