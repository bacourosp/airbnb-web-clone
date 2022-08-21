import { useRouter } from 'next/router'

const Boat = () => {
  const router = useRouter()
  const { id, boat } = router.query

  return (
    <>
      <h1>PostID: {id}</h1>
      <h1>Boat: {boat}</h1>
    </>
  )
}

export default Boat