import axios from 'axios';

export default function buildClient({ req }) {
  if (typeof window === 'undefined') {
    // from Server
    let url = 'http://ticketswapping.xyz/';
    // url = 'http://nginx-ingress-controller.kube-system.svc.cluster.local';

    //   url = 'http://ticketswapping.xyz/';

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
