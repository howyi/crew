import {
    GraphQLCommentResolvers,
    GraphQLPostResolvers, GraphQLPrivateCommentResolvers,
    GraphQLPublicCommentResolvers, GraphQLQueryResolvers, GraphQLResolvers,
    GraphQLUserPostArgs,
    GraphQLUserResolvers
} from "./generated/3";

type UnionResolver<Resolver extends {__resolveType: any}> = Required<Pick<Resolver, '__resolveType'>>
type UnionResolveType<Resolver extends {__resolveType: any}> = ReturnType<Resolver['__resolveType']>
type RootResolver<Resolver> = Required<Resolver>
type ObjectResolver<Resolver> = Required<Omit<Resolver, '__isTypeOf'>>

export class User implements ObjectResolver<GraphQLUserResolvers> {
    constructor() {
    }

    id(): string {
        return '2';
    }

    name(): string {
        return '2';
    }

    post(args: GraphQLUserPostArgs): Post {
        return new Post();
    }

    async posts():Promise<Post[]> {
        return [];
    }
}

export class Post implements ObjectResolver<GraphQLPostResolvers> {
    constructor() {
    }

    id(): string {
        return '2';
    }

    content(): string {
        return '2';
    }

    comments(): Comment[] {
        return [];
    }
}

const commentResolvers: UnionResolver<GraphQLCommentResolvers<any, Comment>> = {
    __resolveType(parent: Comment, context) {
        return parent.graphQLTypename();
    }
}

const queryResolvers: RootResolver<GraphQLQueryResolvers> = {
    user(): User {
        return new User();
    }
}

const resolvers: GraphQLResolvers = {
    Comment: commentResolvers,
    Query: queryResolvers,
}

export abstract class Comment {
    constructor() {
    }

    abstract graphQLTypename(): UnionResolveType<GraphQLCommentResolvers>;

    abstract id(): string;

    abstract content(): string;
}

export class PublicComment extends Comment implements ObjectResolver<GraphQLPublicCommentResolvers> {
    constructor() {
        super()
    }

    graphQLTypename(): UnionResolveType<GraphQLCommentResolvers> {
        return 'PublicComment'
    }

    id(): string {
        return '2';
    }

    content(): string {
        return '2';
    }
}

export class PrivateComment extends Comment implements ObjectResolver<GraphQLPrivateCommentResolvers> {
    constructor() {
        super()
    }

    graphQLTypename(): UnionResolveType<GraphQLCommentResolvers>{
        return 'PrivateComment';
    }

    id(): string {
        return '2';
    }

    content(): string {
        return '2';
    }
}
