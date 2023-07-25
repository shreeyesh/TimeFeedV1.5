import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface PostShared {
  'id' : bigint,
  'timer' : bigint,
  'title' : string,
  'creator' : Principal,
  'content' : string,
  'likes' : bigint,
  'category' : string,
  'dislikes' : bigint,
  'repliesCount' : bigint,
}
export interface Reply {
  'id' : bigint,
  'creator' : Principal,
  'content' : string,
  'likes' : bigint,
  'dislikes' : bigint,
}
export interface TimeFeedImpl {
  'createReply' : ActorMethod<[bigint, string], bigint>,
  'create_post' : ActorMethod<[string, string, string], bigint>,
  'dislikeReply' : ActorMethod<[bigint, bigint], boolean>,
  'downvote' : ActorMethod<[bigint], undefined>,
  'getUsername' : ActorMethod<[{ 'caller' : Principal }], [] | [string]>,
  'get_all_posts' : ActorMethod<[], Array<PostShared>>,
  'get_downvotes' : ActorMethod<[bigint], bigint>,
  'get_post' : ActorMethod<
    [bigint],
    [] | [
      {
        'id' : bigint,
        'timer' : bigint,
        'title' : string,
        'creator' : Principal,
        'content' : string,
        'likes' : bigint,
        'replies' : bigint,
        'category' : string,
        'dislikes' : bigint,
      }
    ]
  >,
  'get_post_count' : ActorMethod<[], bigint>,
  'get_posts_by_category' : ActorMethod<[string], Array<PostShared>>,
  'get_posts_by_user' : ActorMethod<[Principal], Array<PostShared>>,
  'get_replies' : ActorMethod<[bigint], [] | [Array<[bigint, Reply]>]>,
  'get_timer' : ActorMethod<[bigint], bigint>,
  'get_upvotes' : ActorMethod<[bigint], bigint>,
  'likeReply' : ActorMethod<[bigint, bigint], boolean>,
  'setUsername' : ActorMethod<[Principal, string], undefined>,
  'upvote' : ActorMethod<[bigint], undefined>,
}
export interface _SERVICE extends TimeFeedImpl {}
