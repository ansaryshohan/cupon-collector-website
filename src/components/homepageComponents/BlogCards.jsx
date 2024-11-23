import SectionTitle from "../shared/SectionTitle";

const BlogCards = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Coupons to Save Big in 2024",
      description: "Discover the best coupons to maximize your savings on popular e-commerce websites.",
      image: "https://shoptwiz.com/cdn/shop/articles/Discount-Coupons-blog.jpg?v=1709833612", // Replace with your image URL
      link: "#",
    },
    {
      id: 2,
      title: "How to Spot the Best Deals Online",
      description: "A complete guide to finding the best deals and offers on your favorite brands.",
      image: "https://static.freemake.com/blog/wp-content/uploads/2013/05/coupon-sites.png", // Replace with your image URL
      link: "#",
    },
    {
      id: 3,
      title: "Exclusive Discounts for Loyal Shoppers",
      description: "Learn how loyalty programs can help you save even more on your purchases.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77TUGyK1jQbDYHwTQ46OKJr8Qgt1HoJAw9A&s", // Replace with your image URL
      link: "#",
    },
  ];

  return (
    <div className="py-10 ">
      <SectionTitle title={"Our Latest Blogs"}/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 w-full md:w-10/12 mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <figure>
              <img src={blog.image} alt={blog.title} className="rounded-t-lg h-52" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-600">{blog.description}</p>
              <div className="card-actions justify-end">
                <a
                  href={blog.link}
                  className="btn btn-primary btn-sm mt-4"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
