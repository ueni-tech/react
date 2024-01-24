import { useRouter } from 'next/router'

const Setting = ({query}) => {
  const router = useRouter();

  const clickHandler = () => {
    router.reload();
  };
  return (
    <>
    <h1>routerから取得:{router.query.name}</h1>
    <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  )
}

export async function getServerSideProps({query}){
  return {
    props: {query}
  }
}

export default Setting