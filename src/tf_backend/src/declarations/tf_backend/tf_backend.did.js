export const idlFactory = ({ IDL }) => {
  const Post = IDL.Record({
    'id' : IDL.Nat,
    'timer' : IDL.Int,
    'title' : IDL.Text,
    'creator' : IDL.Principal,
    'content' : IDL.Text,
    'likes' : IDL.Nat,
    'category' : IDL.Text,
    'dislikes' : IDL.Nat,
  });
  const TimeFeedImpl = IDL.Service({
    'create_post' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Nat], []),
    'downvote' : IDL.Func([IDL.Nat], [], []),
    'getUsername' : IDL.Func(
        [IDL.Record({ 'caller' : IDL.Principal })],
        [IDL.Opt(IDL.Text)],
        [],
      ),
    'get_downvotes' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'get_post' : IDL.Func([IDL.Nat], [IDL.Opt(Post)], []),
    'get_post_count' : IDL.Func([], [IDL.Nat], []),
    'get_timer' : IDL.Func([IDL.Nat], [IDL.Int], []),
    'get_upvotes' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'setUsername' : IDL.Func([IDL.Principal, IDL.Text], [], []),
    'upvote' : IDL.Func([IDL.Nat], [], []),
  });
  return TimeFeedImpl;
};
export const init = ({ IDL }) => { return []; };
