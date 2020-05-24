export type Maybe<T> = T | null;
export type FieldWrapper<T> = T | Promise<T> | (() => T | Promise<T>);
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
  id: FieldWrapper<Scalars['ID']>;
  name: FieldWrapper<Scalars['String']>;
  post: FieldWrapper<GraphQLPost>;
  posts: Array<FieldWrapper<GraphQLPost>>;
};


export type GraphQLUserPostArgs = {
  id: Scalars['String'];
};

export type GraphQLPost = {
  __typename?: 'Post';
  id: FieldWrapper<Scalars['ID']>;
  content: FieldWrapper<Scalars['String']>;
  comments: Array<FieldWrapper<GraphQLComment>>;
};

export type GraphQLComment = {
  id: FieldWrapper<Scalars['ID']>;
  content: FieldWrapper<Scalars['String']>;
};

export type GraphQLPublicComment = GraphQLComment & {
  __typename?: 'PublicComment';
  id: FieldWrapper<Scalars['ID']>;
  content: FieldWrapper<Scalars['String']>;
};

export type GraphQLPrivateComment = GraphQLComment & {
  __typename?: 'PrivateComment';
  id: FieldWrapper<Scalars['ID']>;
  content: FieldWrapper<Scalars['String']>;
};

export type GraphQLQuery = {
  __typename?: 'Query';
  user: FieldWrapper<GraphQLUser>;
};


export type GraphQLQueryUserArgs = {
  id: Scalars['String'];
};

export type GraphQLMutation = {
  __typename?: 'Mutation';
  updateUser: FieldWrapper<GraphQLUser>;
};


export type GraphQLMutationUpdateUserArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};
