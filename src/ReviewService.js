const mockReviews = [
  {
    title: "Dune",
    author: "Frank Herbert",
    reviewText:"No other single syllable means as much to the science fiction genre, a single word that conjures images of sandworms, spice wars, great battles between rival dynastic families and a massively detailed and intricately crafted universe. No wonder this is widely regarded as not just a Science Fiction masterpiece, but a literary achievement as well.Like a study of Shakespeare, the reader finds that this is an archetype upon which many influences and imitators have based their works. The complexity and depth of the creation is staggering and I am continually astounded at the discipline with which Herbert must have focused his imagination.",
    rating: 4,
    cover:
      "https://preview.redd.it/fgy14jrd3af41.jpg?auto=webp&s=4425fb0240637ce6bbeec7fdc49ce5d4718323f8",
  },
  {
    title: "A Million To One",
    author: "Tony Faggioli",
    reviewText:
      "It was greatIn One in a Million by Tony Faggioli, Kyle Fasano is given a chance at redemption. He is the millionth, which means that by sacrificing himself, he creates the opportunity for a million souls to be called to repent. Some will answer the call, but some will not.In A Million to One, the journey continues. In hell, Kyle struggles to learn what his true mission is, while Detective Napoleon Villa, a man who believes in heaven and hell, has volunteered to accompany the Gray Man to hell to find him. In the meantime, back on earth, Villa’s partner finds a case that is somehow tied to Fasano; a serial killer who heeds the voice of the Other, and Fasano’s wife is fighting off demons who seem determined to destroy what’s left of her family.The reader is taken on a whipsaw journey between hell and hell on earth as the forces of Good and Evil battle for dominance, a journey that will leave your blood chilled and have you shrinking from every shadow.I received a free copy of this book.",
    rating: 3,
    cover:
      "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
  }
];

export const getReviews = async () => {
  return mockReviews;
};

export const addReview = async (review) => {
  mockReviews.unshift(review);
  return review;
};
