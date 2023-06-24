import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Int "mo:base/Int";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";
import Bool "mo:base/Bool";
import Array "mo:base/Array";
import Float "mo:base/Float";
// import Http "mo:base/Http";

// import Text "mo:base/Text";


// var post_id : Nat = 0

actor class TimeFeedImpl() {
  type Post = {
  id: Nat;
  content: Text;
  title: Text;
  creator: Principal;
  timer : Int;
  likes: Nat;
  dislikes: Nat;
};
//   func natHash(key: Nat): Hash.Hash {
//   // Simple hash function that returns the key value as the hash value
//   return key
// };
  var posts : HashMap.HashMap<Nat, Post> = HashMap.HashMap<Nat, Post>(0, Int.equal, Int.hash);
  var nextId : Nat = 0;
  var rankings : HashMap.HashMap<Nat, Nat> = HashMap.HashMap<Nat, Nat>(0, Int.equal, Int.hash);
//   public func handleRequest(request : Http.Request) : async Http.Response {
//  let responseHeaders = {
//       #headers = {
//         ("Access-Control-Allow-Origin", Text.fromArray(["http://localhost:3000"])),
//         ("Access-Control-Allow-Methods", Text.fromArray(["POST, GET"])),
//         ("Access-Control-Allow-Headers", Text.fromArray(["Accept, Authorization, Content-Type"]))
//       };
//  }

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
public shared({ caller }) func upvote(post_id: Nat) : async () {
  let postOption = posts.get(post_id);
  switch (postOption) {
    case (null) { /* The post with provided id doesn't exist. Do nothing. */ };
    case (?post) {
      // The post exists. Increment the likes count.
      let updatedPost : Post = {
        id = post.id;
        content = post.content;
        title = post.title;
        creator = post.creator;
        timer = post.timer;
        likes = post.likes + 1;
        dislikes = post.dislikes;
      };
      posts.put(post_id, updatedPost);
      adjust_timer(post_id, 1);
      // await calculate_rankings();
    };
  }
};

// Downvote a post
public shared({ caller }) func downvote(post_id: Nat) : async () {
  let postOption = posts.get(post_id);
  switch (postOption) {
    case (null) { /* The post with provided id doesn't exist. Do nothing. */ };
    case (?post) {
      // The post exists. Increment the likes count.
      let updatedPost : Post = {
        id = post.id;
        content = post.content;
        title = post.title;
        creator = post.creator;
        timer = post.timer;
        likes = post.likes ;
        dislikes = post.dislikes + 1;
      };
      posts.put(post_id, updatedPost);
      adjust_timer(post_id, -1);
      // await calculate_rankings();
    };
  }
};

// Get upvotes of a post
public shared func get_upvotes(post_id: Nat) : async Nat {
  switch (posts.get(post_id)) {
    case null { return 0; };
    case (?post) { return post.likes; };
  };
};

// Get downvotes of a post
public shared func get_downvotes(post_id: Nat) : async Nat {
  switch (posts.get(post_id)) {
    case null { return 0; };
    case (?post) { return post.dislikes; };
  };
};

//   // create timer for each post
//   // timer starts at 100
//   // every time a post is upvoted, timer increases by 1
//   // every time a post is downvoted, timer decreases by 1
//   // if timer reaches 0, post is deleted
private func adjust_timer(post_id: Nat, adjustment: Int) {
    switch (posts.get(post_id)) {
        case (null) { /* The post with provided id doesn't exist. Do nothing. */ };
        case (?post) {
            // The post exists. Adjust the timer.
            var newTimer : Int = post.timer + adjustment;
            if (newTimer < 0) {
                newTimer := 0;
            };
            let updatedPost : Post = {
                id = post.id;
                content = post.content;
                title = post.title;
                creator = post.creator;
                likes = post.likes;
                timer = newTimer;
                dislikes = post.dislikes;
            };
            posts.put(post_id, updatedPost);
        };
    };
};


// Get timer of a post
public shared func get_timer(post_id: Nat) : async Int {
  switch (posts.get(post_id)) {
    case null { return 0; };
    case (?post) { return post.timer; };
  };
};

private func delete_post(post_id: Nat) : ?Post {
  let removedPost = posts.remove(post_id);
  return removedPost;
};

// Calculate rankings based on timeleft
// public shared({caller}) func calculate_rankings() : async () {
//   let totalPosts = posts.size();
//   var newRankings : HashMap.HashMap<Nat, Int> = HashMap.HashMap<Nat, Int>(0, Int.equal, Int.hash);
//   let keys =  posts.keys();
//   for (postId in keys) {
//     let post =  posts.get(postId);
//     switch(post) {
//       case null { };
//       case (?p) {
//         newRankings.put(postId, p.timer);
//       };
//     };
//   };

//   let sortedRankings = Array.sort<(Nat, Int)>(newRankings.entries().toArray(), func(a, b) {
//     let (_, valA) = a;
//     let (_, valB) = b;
//     return valA > valB;
//   });
  
//   let sortedRankingsFinal = Array.map<(Nat, Int), Nat>(sortedRankings, func(entry) {
//     let (key, _) = entry;
//     return key;
//   });
  
//   rankings := HashMap.fromIter<Nat, Nat>(Array.map<Nat, HashMap.Entry<Nat, Nat>>(sortedRankingsFinal, func(key) {
//     return (key, newRankings.getOrDefault(key, 0));
//   }), 0, Nat.equal, Nat.hash);
// };

// Function to get all posts
// public shared func get_all_posts() : async Array<Post> {
//   let allPosts = posts.values();
//   return allPosts;
// };

// public shared({caller}) func timeOut(post_id: Nat) : async ?Post {
//   switch (await posts.get(post_id)) {
//     case null { return null; };
//     case (?post) {
//       if (post.timer == 0) {
//         await delete_post(post_id);
//       } else {
//         let updatedPost : Post = {
//           id = post.id;
//           content = post.content;
//           title = post.title;
//           creator = post.creator;
//           likes = post.likes;
//           timer = post.timer - 1;
//         };
//         await posts.put(post_id, updatedPost);
//       };
//       return await posts.get(post_id);
//     };
//   };
// };


// //   // public shared func downvote(postId: Nat) : async () {
// //   //   if (posts.contains(postId)) {
// //   //     let post = posts.getOrDefault(postId, { category = ""; content = ""; creator = Principal.undefined; dislikes = 0; image_url = null; likes = 0; id = 0; timer = 0 });
// //   //     let dislikes = post.dislikes;
// //   //     posts.put(postId, { post with dislikes = dislikes + 1 });
// //   //     adjust_timer(postId, -1);
// //   //     calculate_rankings();
// //   //   };
// //   // };

//   public func get_rankings() : async [Nat] {
//     rankings.values();
//   };

// public func get_top_posts(count: Nat) : async [?Post] {
//   var sortedRankings : [(Nat, Nat)] = [];
//   let iter = rankings.entries();
// let iter = topRankings.keys();
// var topPosts: [?Post] = [];
// loop {
//   switch (iter.next()) {
//     case (?(postId, _)) {
//       let postOpt = posts.get(postId);
//       topPosts := Array.append<Option<Post>>(topPosts, [postOpt]);
//     };
//     case null { (); };
//   };
// };
  
//  let val = iter.next();
//     sortedRankings := Array.append<(Nat, Nat)>(sortedRankings, [val]);
//   };
//   let sortedRankingsFinal = Array.sort<(Nat, Nat)>(sortedRankings, func(a:(Nat, Nat), b:(Nat, Nat)):Order {
//     let (_, valA) = a;
//     let (_, valB) = b;
//     if (valA < valB) {
//       return #less;
//     } else if (valA > valB) {
//       return #greater;
//     } else {
//       return #equal;
//     }
//   });
// let topRankings = Array.subArray(sortedRankingsFinal, 0, count);
// let topPosts = Array.tabulate<?Post>(Array.size<(Nat, Nat)>(topRankings), func(i:Nat):?Post {
//     let (post_id, _) = topRankings[i];
//     return await posts.get(post_id);
//   return topPosts;
//   });

// CORS check
// public shared func handleRequest(request: Http.Request): async Http.Response {
//   let responseHeaders = {
//     headers = {
//       ("Access-Control-Allow-Origin", Text.fromArray(["http://localhost:3000"])),
//       ("Access-Control-Allow-Methods", Text.fromArray(["POST, GET"])),
//       ("Access-Control-Allow-Headers", Text.fromArray(["Accept, Authorization, Content-Type"]))
//     }
//   };

//   let responseBody = "Hello, world!"; // Replace with your response body

//   return {
//     #status = Http.Ok,
//     #headers = responseHeaders,
//     #body = Http.Body.fromText(responseBody)
//   };
// }



// public shared({caller}) func calculate_rankings() : async () {
//   let totalPosts = posts.size();
//   var newRankings : HashMap.HashMap<Nat, Nat> = HashMap.HashMap<Nat, Nat>(0, Int.equal, Int.hash);
//   let keys =  posts.keys();
//   for (postId in keys) {
//     let post =  posts.get(postId);
//     switch(post) {
//       case null { };
//       case (?p) {
//         let ldr = LDR(p.likes, p.dislikes);
//             // sort the ldr which has ldr closer to 1.5 is ranked higher        
//                let ldrDifference = Nat.abs(ldr - 1_500_000);
//         newRankings.put(postId, ldrDifference);
//       };
//     };
//   };
  
//   let sortedRankings = Array.sort<(Nat, Nat)>(newRankings.entries().toArray(), func(a, b) {
//     let (_, valA) = a;
//     let (_, valB) = b;
//     return valA < valB;
//   });
  
//   let sortedRankingsFinal = Array.map<(Nat, Nat), Nat>(sortedRankings, func(entry) {
//     let (key, _) = entry;
//     return key;
//   });
  
//   rankings := HashMap.fromIter<Nat, Nat>(Array.map<Nat, HashMap.Entry<Nat, Nat>>(sortedRankingsFinal, func(key) {
//     return (key, newRankings.getOrDefault(key, 0));
//   }), 0, Nat.equal, Nat.hash);
// };
        // newRankings.put(postId, ldr);
  // rankings := newRankings;
      // };
//     };
//   };
// };

// a private function that sorts the posts by their LDR which is calculated by the number of likes divided by the number of dislikes
private func LDR(likes: Nat, dislikes: Nat) : Nat {
  if (dislikes == 0) {
    return likes;
  } else {
    let ldr = (likes / dislikes);
  };
};

// private func LDR(likes: Nat, dislikes: Nat) : Nat {
//   if (dislikes == 0) {
//     return likes;
//   } else {
//     return (likes / dislikes) + 1;
//   };
// };

// get rankings
// public shared({caller}) func get_rankings() : async [Nat] {
//   let keys = rankings.keys();
//   var rankingsList : [Nat] = [];
//   for (key in keys) {
//     let val = rankings.get(key);
//     switch(val) {
//       case null { };
//       case (?v) { rankingsList := Array.append<Nat>(rankingsList, [v]); };
//     };
//   };
//   return rankingsList;
// };


//   // Function to return the number of posts in the system
  public func get_post_count() : async Nat {
    posts.size();
  };

//   // Function to return user details
  // public func get_user_details(user: Principal) : async [UserDetails] {
  //   let userPosts = posts.values().filter((post) := post.creator == user);
  //   let userLikes = userPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
  //   let userDislikes = userPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
  //   let userRanking = LDR(userLikes, userDislikes);
  //   { likes = userLikes; dislikes = userDislikes; ranking = userRanking };
  // };

//   // Function to return the number of posts created by a user
//   public func get_user_post_count(user: Principal) : async Nat {
//     posts.values().filter((post) := post.creator == user).size();
//   };

//   // Function to return the number of likes a user has received
//   public func get_user_likes(user: Principal) : async Nat {
//     let userPosts = posts.values().filter((post) := post.creator == user);
//     userPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
//   };

//   // Function to return the number of dislikes a user has received
//   public func get_user_dislikes(user: Principal) : async Nat {
//     let userPosts = posts.values().filter((post) := post.creator == user);
//     userPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
//   };

//   // Function to return the number of likes a post has received
//   public func get_post_likes(postId: Nat) : async Nat {
//     let post = posts.getOrDefault(postId, { category = ""; content = ""; creator = Principal.undefined; dislikes = 0; image_url = null; likes = 0; id = 0; timer = 0 });
//     post.likes;
//   };

//   // Function to return the number of dislikes a post has received
//   public func get_post_dislikes(postId: Nat) : async Nat {
//     let post = posts.getOrDefault(postId, { category = ""; content = ""; creator = Principal.undefined; dislikes = 0; image_url = null; likes = 0; id = 0; timer = 0 });
//     post.dislikes;
//   };

//   // Function to return the average time in a category
//   public func get_average_time(categoryID: Nat) : async Nat {
//     let category = categories.getOrDefault(categoryID, "");
//     let categoryPosts = posts.values().filter((post) := post.category == category);
//     let categoryTimers = categoryPosts.map((post) := post.timer);
//     let categoryTimerSum = categoryTimers.reduce((a, b) := a + b, 0);
//     let categoryTimerAverage = categoryTimerSum / categoryPosts.size();
//     categoryTimerAverage;
//   };

//   // Function to return the number of posts in a category
//   public func get_category_post_count(category: Text) : async Nat {
//     posts.values().filter((post) := post.category == category).size();
//   };

//   // Function to return the number of likes in a category
//   public func get_category_likes(category: Text) : async Nat {
//     let categoryPosts = posts.values().filter((post) := post.category == category);
//     categoryPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
//   };

//   // Function to return the number of dislikes in a category
//   public func get_category_dislikes(category: Text) : async Nat {
//     let categoryPosts = posts.values().filter((post) := post.category == category);
//     categoryPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
//   };

//   // Function to return the number of posts in a category
//   public func get_category_ranking(category: Text) : async Nat {
//     let categoryPosts = posts.values().filter((post) := post.category == category);
//     let categoryLikes = categoryPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
//     let categoryDislikes = categoryPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
//     LDR(categoryLikes, categoryDislikes);
//   };

//   // Function to get the top posts in a category
//   public func get_category_top_posts(category: Text, count: Nat) : async [Post] {
//     let categoryPosts = posts.values().filter((post) := post.category == category);
//     let sortedCategoryPosts = categoryPosts.toArray();
//     Array.sortInPlace(sortedCategoryPosts, (a, b) := a.timer > b.timer);
//     let topCategoryPosts = sortedCategoryPosts.subArray(0, count);
//     topCategoryPosts.filter((post) := post != null);
//   };

//   // Function to get the recent posts in a category
//   public func get_category_new_posts(category: Text, count: Nat) : async [Post] {
//     let categoryPosts = posts.values().filter((post) := post.category == category);
//     let sortedCategoryPosts = categoryPosts.toArray();
//     Array.sortInPlace(sortedCategoryPosts, (a, b) := a.id > b.id);
//     let topCategoryPosts = sortedCategoryPosts.subArray(0, count);
//     topCategoryPosts.filter((post) := post != null);
//   };

//   // Function to store user details
//   public func store_user_details(user: Principal, likes: Nat, dislikes: Nat, ranking: Nat) : async () {
//     let userPosts = posts.values().filter((post) := post.creator == user);
//     let userLikes = userPosts.map((post) := post.likes).reduce((a, b) := a + b, 0);
//     let userDislikes = userPosts.map((post) := post.dislikes).reduce((a, b) := a + b, 0);
//     let userRanking = LDR(userLikes, userDislikes);
//     { likes = userLikes; dislikes = userDislikes; ranking = userRanking };
//   };  

//   // Function to self destruct a post 
  // public func self_destruct_post(postId: Nat) : async () {
  //   posts.remove(postId);
  // };

//   // Function to get postID 
//   public func get_post_id() : async Nat {
//     postID;
//   };

};
