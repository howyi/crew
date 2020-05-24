export type Maybe<T> = T | null;
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
