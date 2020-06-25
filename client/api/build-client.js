import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // from Server
    const url = 'http://nginx-ingress-controller.kube-system.svc.cluster.local';

    // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //   url = 'http://nginx-ingress-controller.kube-system.svc.cluster.local';
    // } else {
    //   url = 'http://ticketswapping.xyz/';
    // }

    return axios.create({
      baseURL: url,
      headers: req.headers,
    });
  } else {
    // from Browser
    return axios.create({
      baseURL: '/',
    });
  }
};
