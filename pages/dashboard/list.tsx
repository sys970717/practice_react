import { useEffect } from "react";
import { useRouter } from "next/router";
import posts from "@/testMock/dashboard/posts.json";

const Dashboard = (props: { post: { title: string, content: string } }) => {
    const router = useRouter();

    return (
        <>
            <ul>
                <li>제목: {props.post.title}</li>
                <li>내용: {props.post.content}</li>
            </ul>
        </>
    )
}

Dashboard.getInitialProps = context => {
    console.log(context);
    return {
        post: posts[context.query.id],
    }
}

export default Dashboard;