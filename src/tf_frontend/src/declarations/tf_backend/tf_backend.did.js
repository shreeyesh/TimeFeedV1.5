export const idlFactory = ({ IDL }) => {
  const PostShared = IDL.Record({
    'id' : IDL.Nat,
    'timer' : IDL.Int,
    'title' : IDL.Text,
    'creator' : IDL.Principal,
    'content' : IDL.Text,
    'likes' : IDL.Nat,
    'category' : IDL.Text,
    'dislikes' : IDL.Nat,
    'repliesCount' : IDL.Nat,
  });
  const Reply = IDL.Record({
    'id' : IDL.Nat,
    'creator' : IDL.Principal,
    'content' : IDL.Text,
    'likes' : IDL.Nat,
    'dislikes' : IDL.Nat,
  });
  const TimeFeedImpl = IDL.Service({
    'createReply' : IDL.Func([IDL.Nat, IDL.Text], [IDL.Nat], []),
    'create_post' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Nat], []),
    'dislikeReply' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Bool], []),
    'downvote' : IDL.Func([IDL.Nat], [], []),
    'getUsername' : IDL.Func(
        [IDL.Record({ 'caller' : IDL.Principal })],
        [IDL.Opt(IDL.Text)],
        [],
      ),
    'get_all_posts' : IDL.Func([], [IDL.Vec(PostShared)], []),
    'get_downvotes' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'get_post' : IDL.Func(
        [IDL.Nat],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Nat,
              'timer' : IDL.Int,
              'title' : IDL.Text,
              'creator' : IDL.Principal,
              'content' : IDL.Text,
              'likes' : IDL.Nat,
              'replies' : IDL.Nat,
              'category' : IDL.Text,
              'dislikes' : IDL.Nat,
            })
          ),
        ],
        [],
      ),
    'get_post_count' : IDL.Func([], [IDL.Nat], []),
    'get_posts_by_category' : IDL.Func([IDL.Text], [IDL.Vec(PostShared)], []),
    'get_posts_by_user' : IDL.Func([IDL.Principal], [IDL.Vec(PostShared)], []),
    'get_replies' : IDL.Func(
        [IDL.Nat],
        [IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Nat, Reply)))],
        [],
      ),
    'get_timer' : IDL.Func([IDL.Nat], [IDL.Int], []),
    'get_upvotes' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'likeReply' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Bool], []),
    'setUsername' : IDL.Func([IDL.Principal, IDL.Text], [], []),
    'upvote' : IDL.Func([IDL.Nat], [], []),
  });
  return TimeFeedImpl;
};
export const init = ({ IDL }) => { return []; };
