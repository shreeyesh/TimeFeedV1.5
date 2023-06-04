module {
public type Post = {
  id : Nat;
  content : Text;
  image_url : ?Text;
  timer : Nat;
  likes : Nat;
  dislikes : Nat;
  category : Text;
  creator : Principal;
};

public type TimeFeed = actor {
   create_post : (content: Text, image_url: ?Text, category: Text) -> async Nat;
    upvote : (post_id: Nat) -> async ();
    downvote : (post_id: Nat) -> async ();
    get_post : (id: Nat) -> async ?Post;
    list_posts : () -> async [Post];
    list_posts_by_category : (category: Text) -> async [Post];
    list_posts_by_creator : (creator: Principal) -> async [Post];
};

type II = actor {
   login : () -> async Principal;
};
}