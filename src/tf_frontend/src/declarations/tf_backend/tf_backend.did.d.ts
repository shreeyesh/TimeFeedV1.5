import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Post {
  'id' : bigint,
  'timer' : bigint,
  'title' : string,
  'creator' : Principal,
  'content' : string,
  'likes' : bigint,
}
export interface TimeFeedImpl {
  'create_post' : ActorMethod<[string, string, [] | [string], string], bigint>,
  'get_post' : ActorMethod<[bigint], [] | [Post]>,
}
export interface _SERVICE extends TimeFeedImpl {}
