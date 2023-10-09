import apiClient from '../client'

export const register = ({ email, password }: { email: string, password: string }) => apiClient({
    path: `register`,
    method: 'post',
    data: { email, password }
})