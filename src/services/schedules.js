import request from '@/utils/request';

export async function fakeSchedulesList(params) {
  return request('/api/schedules', { params });
}
// export async function getFakeCaptcha(mobile) {
//   return request(`/api/login/captcha?mobile=${mobile}`);
// }
