import Appbar from '../../components/Appbar'
import BlogCard from '../../components/Blogs/BlogCard'
import { useBlogs } from '../../hooks/useBlogs';

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
      loading...
    </div>
  }

  return (
    <div>
      <Appbar />
      <div className='flex justify-center'>
        <div className='max-w-4xl'>
          {blogs.map(blog => <BlogCard
            authorName={'vansh kalra'}
            title={'How a Ugly Single-page website make s$500 dollar a month without any affiliate marketing'}
            content={`Creating a simple, single-page website that generates $500 a month without affiliate marketing might sound like a tall order, but with the right strategy, it’s entirely possible. The key lies in solving a specific problem or catering to a niche audience that’s willing to pay for a solution.
          Imagine a website that offers a tool or service with significant value, such as a calculator for a specific industry, a resume builder, or a small business resource like an invoice generator. The design might be plain or even unattractive, but if it effectively addresses the needs of its target audience, users will overlook the aesthetics.
          Monetization can come from charging a small fee for premium features or a one-time payment for unlimited access. For example, a basic tool might be free, but advanced functionalities or downloadable templates could be available for a small fee. Even at $10 per sale, gaining 50 users a month would bring in $500.
          Another approach could involve creating a membership model where users pay a recurring subscription for access to exclusive content, like industry reports, templates, or tools that save them time and effort. The subscription might be low, say $5 or $10 per month, but with a consistent and engaged user base, it adds up.
          Additionally, the website could offer a paywall-protected ebook or a course in a specialized niche that the target audience finds valuable. The key here is focusing on providing something that people are willing to pay for, regardless of how the website looks.
          In summary, the success of a single-page website generating $500 a month without affiliate marketing hinges on its ability to offer real value to a dedicated audience, making them willing to pay for access to that value.`}
            publishedDate={'2nd Feb 2024'}
          />
          )}
        </div>
      </div>
    </div>
  )
}

export default Blogs