import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Int "mo:base/Int";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";
import Bool "mo:base/Bool";


// var post_id : Nat = 0

actor class TimeFeedImpl() {
  type Post = {
  id: Nat;
  content: Text;
  title: Text;
  creator: Principal;
  timer : Nat;
  likes: Nat;
};
//   func natHash(key: Nat): Hash.Hash {
//   // Simple hash function that returns the key value as the hash value
//   return key
// };
  var posts : HashMap.HashMap<Nat, Post> = HashMap.HashMap<Nat, Post>(0, Int.equal, Int.hash);
  var nextId : Nat = 0;

 // This function creates posts and assigns them a unique id
  public shared({ caller }) func create_post(title: Text,content: Text,  category: Text) : async Nat {
    let post_id = nextId;
    let post : Post = {
      id = post_id;
      content = content;
      title = title;
      creator = caller;
      dislikes = 10;
      // image_url = image_url;
      likes = 10;
      timer = 100;
    };
    posts.put(post_id,post);
    nextId += 1;
    post_id;
  };


  public shared func get_post(post_id: Nat) : async ?Post {
    if (posts.get(post_id)!=null) {
      return posts.get(post_id);
    } else {
      null;
    }
  };
// };

// Upvote a post
public shared({ caller })  func upvote(post_id: Nat) : async () {
    let post = posts.get(post_id);
    if (post != null) {
    // post : Post := post;
    post.likes += 1;
    // Update the likes field in the post
    posts.put(post_id, { post with likes = likes });
    adjust_timer(post_id, 1);
    calculate_rankings();
  }
  else {
    null;
  }
};

  // create timer for each post
  // timer starts at 100
  // every time a post is upvoted, timer increases by 1
  // every time a post is downvoted, timer decreases by 1
  // if timer reaches 0, post is deleted
  private func adjust_timer(post_id: Nat, adjustment: Int) {
    if (posts.get(post_id)!=null) {
      let post = posts.get(post_id);
      let timer = post.timer;
      posts.put(post_id, { post with timer = timer + adjustment });
    };
  };

  private func timeOut(post_id: Nat) : async ?Post {
    if (posts.get(post_id) == null) {
return null;
};
    if (posts.get(post_id)!=null) {
      let post = posts.get(post_id);
      let timer = post.timer;
      if (timer == 0) {
        delete_post(post_id);
      } else {
        posts.put(post_id, { post with timer = timer - 1 });
      };
    };
  };

  private func delete_post(post_id: Nat) : async ?Post {
    posts.remove(post_id);
  };

//   public func get_post(id: Nat) : async ?Post {
//     posts.get(id);
//   };

//   // public shared func upvote(post_id: Nat) : async () {
//   //  if (posts.get(post_id) != null) {
//   // //     let post = posts.get(post_id);
//   // //  if (HashMap.containsKey(posts, post_id)) {
//   //     let post = posts.get(posts, post_id);
//   //     let likes = post.likes;
//   //     posts.put(postId, { post with likes = likes + 1 });
//   //     adjust_timer(postId, 1);
//   //     calculate_rankings();
//   //   };
//   // };

//   // public shared func downvote(postId: Nat) : async () {
//   //   if (posts.contains(postId)) {
//   //     let post = posts.getOrDefault(postId, { category = ""; content = ""; creator = Principal.undefined; dislikes = 0; image_url = null; likes = 0; id = 0; timer = 0 });
//   //     let dislikes = post.dislikes;
//   //     posts.put(postId, { post with dislikes = dislikes + 1 });
//   //     adjust_timer(postId, -1);
//   //     calculate_rankings();
//   //   };
//   // };

  public func get_rankings() : async [Nat] {
    rankings.values();
  };

  public func get_top_posts(count: Nat) : async [Post] {
   let sortedRankings = rankings.entries().toArray();
    Array.sortInPlace(sortedRankings, (a, b) := a.1 > b.1);
    let topRankings = sortedRankings.subArray(0, count);
    let topPosts = topRankings.map((entry) := posts.get(entry.0));
    topPosts.filter((post) := post != null);
  };

  private func adjust_timer(postId: Nat, adjustment: Int) {
    if (posts.contains(postId)) {
      let post = posts.getOrDefault(postId, { category = ""; content = ""; creator = Principal.undefined; dislikes = 0; image_url = null; likes = 0; id = 0; timer = 0 });
      let timer = post.timer;
      let adjustedTimer = Nat.fromInt(Int.max(Nat.toInt(timer) + adjustment, 0));
      posts.put(postId, { post with timer = adjustedTimer });
    };
  };

  public shared func calculate_rankings() : async () {
    let totalPosts = posts.size();
    var newRankings : HashMap<Nat, Nat> = HashMap.empty();
    for (postId in posts.keys()) {
      let post = posts.get(postId);
      let ldr = LDR(post.likes, post.dislikes);
      newRankings.put(postId, ldr);
    };
    rankings := newRankings;
  };

//   // Helper function for calculating LDR (Likes-to-Dislikes ratio)
  private func LDR(likes: Nat, dislikes: Nat) : Nat {
    if (dislikes == 0) {
      likes;
    } else {
      (likes / dislikes) + 1;
    }
  };

  // Function to return the number of posts in the system
  public func get_post_count() : async Nat {
    posts.size();
  };

  // Function to return user details
  public func get_user_details(user: Principal) : async UserDetails {
    let userPosts = posts.values().filter((post) := post.creator == user);
    let userLikes = userPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
    let userDislikes = userPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
    let userRanking = LDR(userLikes, userDislikes);
    { likes = userLikes; dislikes = userDislikes; ranking = userRanking };
  };

  // Function to return the number of posts created by a user
  public func get_user_post_count(user: Principal) : async Nat {
    posts.values().filter((post) := post.creator == user).size();
  };

  // Function to return the number of likes a user has received
  public func get_user_likes(user: Principal) : async Nat {
    let userPosts = posts.values().filter((post) := post.creator == user);
    userPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
  };

  // Function to return the number of dislikes a user has received
  public func get_user_dislikes(user: Principal) : async Nat {
    let userPosts = posts.values().filter((post) := post.creator == user);
    userPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
  };

  // Function to return the number of likes a post has received
  public func get_post_likes(postId: Nat) : async Nat {
    let post = posts.getOrDefault(postId, { category = ""; content = ""; creator = Principal.undefined; dislikes = 0; image_url = null; likes = 0; id = 0; timer = 0 });
    post.likes;
  };

  // Function to return the number of dislikes a post has received
  public func get_post_dislikes(postId: Nat) : async Nat {
    let post = posts.getOrDefault(postId, { category = ""; content = ""; creator = Principal.undefined; dislikes = 0; image_url = null; likes = 0; id = 0; timer = 0 });
    post.dislikes;
  };

  // Function to return the average time in a category
  public func get_average_time(category: String) : async Nat {
    let categoryPosts = posts.values().filter((post) := post.category == category);
    let categoryTimers = categoryPosts.map((post) := post.timer);
    let categoryTimerSum = categoryTimers.reduce((a, b) := a + b, 0);
    let categoryTimerAverage = categoryTimerSum / categoryPosts.size();
    categoryTimerAverage;
  };

  // Function to return the number of posts in a category
  public func get_category_post_count(category: String) : async Nat {
    posts.values().filter((post) := post.category == category).size();
  };

  // Function to return the number of likes in a category
  public func get_category_likes(category: String) : async Nat {
    let categoryPosts = posts.values().filter((post) := post.category == category);
    categoryPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
  };

  // Function to return the number of dislikes in a category
  public func get_category_dislikes(category: String) : async Nat {
    let categoryPosts = posts.values().filter((post) := post.category == category);
    categoryPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
  };

  // Function to return the number of posts in a category
  public func get_category_ranking(category: String) : async Nat {
    let categoryPosts = posts.values().filter((post) := post.category == category);
    let categoryLikes = categoryPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
    let categoryDislikes = categoryPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
    LDR(categoryLikes, categoryDislikes);
  };

  // Function to get the top posts in a category
  public func get_category_top_posts(category: String, count: Nat) : async [Post] {
    let categoryPosts = posts.values().filter((post) := post.category == category);
    let sortedCategoryPosts = categoryPosts.toArray();
    Array.sortInPlace(sortedCategoryPosts, (a, b) := a.timer > b.timer);
    let topCategoryPosts = sortedCategoryPosts.subArray(0, count);
    topCategoryPosts.filter((post) := post != null);
  };

  // Function to get the recent posts in a category
  public func get_category_new_posts(category: String, count: Nat) : async [Post] {
    let categoryPosts = posts.values().filter((post) := post.category == category);
    let sortedCategoryPosts = categoryPosts.toArray();
    Array.sortInPlace(sortedCategoryPosts, (a, b) := a.id > b.id);
    let topCategoryPosts = sortedCategoryPosts.subArray(0, count);
    topCategoryPosts.filter((post) := post != null);
  };

  // Function to store user details
  public func store_user_details(user: Principal, likes: Nat, dislikes: Nat, ranking: Nat) : async () {
    let userPosts = posts.values().filter((post) := post.creator == user);
    let userLikes = userPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
    let userDislikes = userPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
    let userRanking = LDR(userLikes, userDislikes);
    { likes = userLikes; dislikes = userDislikes; ranking = userRanking };
  };  

  // Function to self destruct a post 
  public func self_destruct_post(postId: Nat) : async () {
    posts.remove(postId);
  };

  // Function to get postID 
  public func get_post_id() : async Nat {
    postID;
  };

};
