import Mock from "mockjs"
import videos from '@/mock/data/videos.json'

Mock.mock('/mock/videos',{
  code: 200,
  data: videos
})