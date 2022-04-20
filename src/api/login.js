import request from '@/utils/request'
export const login = params => {
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: params
  })
}
