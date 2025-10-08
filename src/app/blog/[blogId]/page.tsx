

const DynamicBlogPage = async ({ params }:{params:Promise<{blogId:string}>}) => {
    const {blogId} = await params
  
    return (
        <div>
            <h1 className="text-4xl">Dynamic Blog Page Blog ID: {blogId} </h1>
        </div>
    );
};

export default DynamicBlogPage;