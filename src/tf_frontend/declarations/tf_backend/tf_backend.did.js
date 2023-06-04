export const idlFactory = ({ IDL }) => {
  const Post = IDL.Record({
    'id' : IDL.Nat,
    'timer' : IDL.Nat,
    'title' : IDL.Text,
    'creator' : IDL.Principal,
    'content' : IDL.Text,
    'likes' : IDL.Nat,
  });
  const TimeFeedImpl = IDL.Service({
    'create_post' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Opt(IDL.Text), IDL.Text],
        [IDL.Nat],
        [],
      ),
    'get_post' : IDL.Func([IDL.Nat], [IDL.Opt(Post)], []),
  });
  return TimeFeedImpl;
};
export const init = ({ IDL }) => { return []; };
