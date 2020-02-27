import { stringify } from 'querystring';
import { router } from 'umi';
import { fakeSchedulesList } from '@/services/schedules';
// import { setAuthority } from '@/utils/authority';
// import { getPageQuery } from '@/utils/utils';

const Model = {
  namespace: 'schedules',
  state: {
    list: undefined,
  },
  effects: {
    *fetchSchedules({ payload }, { call, put }) {
      const response = yield call(fakeSchedulesList, payload);

      yield put({
        type: 'saveSchedules',
        payload: response,
      });

      if (window.location.pathname === '/home')
        router.replace({
          pathname: '/schedules',
          search: stringify(payload),
        });
    },
  },
  reducers: {
    saveSchedules(state, { payload }) {
      return { ...state, list: payload };
    },
  },
};
export default Model;
