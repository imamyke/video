import Mock from "mockjs"
import videos from '@/mock/data/videos.json'
import channels from'@/mock/data/channels.json'

Mock.mock('/mock/videos',{
  code: 200,
  data: videos
})

Mock.mock('/mock/channels',{
  code: 200,
  data: channels
})