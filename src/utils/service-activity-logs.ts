import {AxiosInstance} from "axios";

type ResponseWithPaginate = {
  total: number
  limit: number
  skip: number
  data: ActivityLogsResponse[]
}

export type ActivityLogsResponse = {
  id: string
  userName: string
  role: string
  userActivity: string
  createdAt: string
}

export interface IServiceActivityLogs {
  getActivityLogs: (id: string) => Promise<ResponseWithPaginate>
}

export const ServiceActivityLogs = (axiosInstance: AxiosInstance): IServiceActivityLogs => ({
  getActivityLogs: async (id: string): Promise<ResponseWithPaginate> => {
    const {data, status, statusText} = await axiosInstance.get(`activities?id=${id}`)
    if (status !== 200) {
      throw new Error(statusText)
    }
    return data
  }
})
