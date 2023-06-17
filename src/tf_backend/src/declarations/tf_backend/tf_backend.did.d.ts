import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Post {
  'id' : bigint,
  'timer' : bigint,
  'title' : string,
  'creator' : Principal,
  'content' : string,
  'likes' : bigint,
  'dislikes' : bigint,
}
export interface TimeFeedImpl {
  'create_post' : ActorMethod<[string, string, string], bigint>,
  'downvote' : ActorMethod<[bigint], undefined>,
  'get_downvotes' : ActorMethod<[bigint], bigint>,
  'get_post' : ActorMethod<[bigint], [] | [Post]>,
  'get_post_count' : ActorMethod<[], bigint>,
  'get_timer' : ActorMethod<[bigint], bigint>,
  'get_upvotes' : ActorMethod<[bigint], bigint>,
  'upvote' : ActorMethod<[bigint], undefined>,
}
export interface _SERVICE extends TimeFeedImpl {}
