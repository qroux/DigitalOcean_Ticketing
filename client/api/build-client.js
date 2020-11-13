import axios from 'axios';

export default function BuildClient({ req }){
  if (typeof window === 'undefined') {
    // from Server
    const url = 'http://ticketswapping.xyz/';
    // const url = 'http://nginx-ingress-controller.kube-system.svc.cluster.local';

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
