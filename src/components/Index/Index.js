import React, { useEffect } from 'react'
import { PageContainer } from '../../../styles/Constants/PageStyles'

export default function Index(props) {
  useEffect(() => {
    console.log(props)
  })
  return (
    <PageContainer>
      test
    </PageContainer>
  )
}
