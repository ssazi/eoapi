import { eoFormatRequestData, eoFormatResponseData } from './api-test.utils';
fdescribe('test unit format request/response', function () {
  fit('format request', function () {
    let requestInfo = {
      name: '新冠全国疫情',
      projectID: 1,
      uri: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
      groupID: 0,
      protocol: 'http',
      method: 'GET',
      requestBodyType: 'raw',
      requestBodyJsonType: 'object',
      requestBody: '',
      queryParams: [
        {
          name: 'name',
          required: true,
          value: 'disease_h5',
        },
        {
          name: '',
          required: true,
          value: '',
        },
      ],
      restParams: [
        {
          name: '',
          required: true,
          value: '',
        },
      ],
      requestHeaders: [
        {
          name: '',
          required: true,
          value: '',
        },
      ],
      responseHeaders: [
        {
          name: 'date',
          value: 'Sat, 05 Feb 2022 04:30:44 GMT',
        },
        {
          name: 'content-type',
          value: 'application/json',
        },
        {
          name: 'transfer-encoding',
          value: 'chunked',
        },
        {
          name: 'connection',
          value: 'close',
        },
        {
          name: 'server',
          value: 'openresty',
        },
        {
          name: 'tracecode',
          value: '8QMewH9c6JodvyHb5wE=',
        },
        {
          name: 'x-client-ip',
          value: '120.26.198.150',
        },
        {
          name: 'x-server-ip',
          value: '58.250.137.40',
        },
      ],
      responseBodyType: 'json',
      responseBodyJsonType: 'object',
      responseBody: [
        {
          name: 'ret',
          value: 0,
          description: '',
          type: 'number',
          required: true,
          example: '',
        },
        {
          name: 'data',
          value: '{}',
          description: '实际参数是 string，为了展示文档展开显示',
          type: 'object',
          required: true,
          example:
            '{"lastUpdateTime":"2022-02-05 11:52:51","chinaTotal":{"confirm":139641,"heal":126827,"dead":5700,"nowConfirm":7114,"suspect":2,"nowSevere":6,"importedCase":12684,"noInfect":887,"showLocalConfirm":1,"showlocalinfeciton":1,"localConfirm":851,"noInfectH5":109,"localConfirmH5":850,"local_acc_confirm":106297},"chinaAdd":{"confirm":321,"heal":165,"dead":0,"nowConfirm":156,"suspect":-2,"nowSevere":0,"importedCase":18,"noInfect":60,"localConfirm":-67,"noInfectH5":0,"localConfirmH5":9},"isShowAdd":true,"showAddSwitch":{"all":true,"confirm":true,"suspect":true,"dead":true,"heal":true,"nowConfirm":true,"nowSevere":true,"importedCase":true,"noInfect":true,"localConfirm":true,"localinfeciton":true},"areaTree":[{"name":"中国","today":{"confirm":321,"isUpdated":true},"total":{"nowConfirm":7114,"confirm":139641,"dead":5700,"showRate":false,"heal":126827,"showHeal":true,"wzz":0,"provinceLocalConfirm":0}}]}',
          enum: [
            {
              default: false,
              value: '',
              description: '',
            },
          ],
          children: [
            {
              name: 'areaTree',
              required: true,
              example: '',
              type: 'array',
              description: '',
              children: [
                {
                  name: 'name',
                  value: '中国',
                  description: '',
                  type: 'string',
                  required: true,
                  example: '中国',
                },
                {
                  name: 'today',
                  required: true,
                  example: '',
                  type: 'object',
                  description: '',
                  children: [
                    {
                      name: 'confirm',
                      value: 321,
                      description: '',
                      type: 'number',
                      required: true,
                      example: 321,
                    },
                    {
                      name: 'isUpdated',
                      value: true,
                      description: '',
                      type: 'boolean',
                      required: true,
                      example: true,
                    },
                  ],
                },
                {
                  name: 'total',
                  required: true,
                  example: '',
                  type: 'object',
                  description: '',
                  children: [
                    {
                      name: 'nowConfirm',
                      value: 7114,
                      description: '',
                      type: 'number',
                      required: true,
                      example: 7114,
                    },
                    {
                      name: 'confirm',
                      value: 139641,
                      description: '',
                      type: 'number',
                      required: true,
                      example: 139641,
                    },
                    {
                      name: 'dead',
                      value: 5700,
                      description: '',
                      type: 'number',
                      required: true,
                      example: 5700,
                    },
                    {
                      name: 'showRate',
                      value: false,
                      description: '',
                      type: 'boolean',
                      required: true,
                      example: '',
                    },
                    {
                      name: 'heal',
                      value: 126827,
                      description: '',
                      type: 'number',
                      required: true,
                      example: 126827,
                    },
                    {
                      name: 'showHeal',
                      value: true,
                      description: '',
                      type: 'boolean',
                      required: true,
                      example: true,
                    },
                    {
                      name: 'wzz',
                      value: 0,
                      description: '',
                      type: 'number',
                      required: true,
                      example: '',
                    },
                    {
                      name: 'provinceLocalConfirm',
                      value: 0,
                      description: '',
                      type: 'number',
                      required: true,
                      example: '',
                    },
                  ],
                },
                {
                  name: 'children',
                  type: 'array',
                  required: true,
                  example: '',
                  enum: [],
                  description: '',
                },
              ],
            },
            {
              name: 'chinaTotal',
              required: true,
              example: '',
              type: 'object',
              description: '',
              children: [
                {
                  name: 'confirm',
                  value: 139641,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 139641,
                },
                {
                  name: 'heal',
                  value: 126827,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 126827,
                },
                {
                  name: 'dead',
                  value: 5700,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 5700,
                },
                {
                  name: 'nowConfirm',
                  value: 7114,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 7114,
                },
                {
                  name: 'suspect',
                  value: 2,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 2,
                },
                {
                  name: 'nowSevere',
                  value: 6,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 6,
                },
                {
                  name: 'importedCase',
                  value: 12684,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 12684,
                },
                {
                  name: 'noInfect',
                  value: 887,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 887,
                },
                {
                  name: 'showLocalConfirm',
                  value: 1,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 1,
                },
                {
                  name: 'showlocalinfeciton',
                  value: 1,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 1,
                },
                {
                  name: 'localConfirm',
                  value: 851,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 851,
                },
                {
                  name: 'noInfectH5',
                  value: 109,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 109,
                },
                {
                  name: 'localConfirmH5',
                  value: 850,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 850,
                },
                {
                  name: 'local_acc_confirm',
                  value: 106297,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 106297,
                },
              ],
            },
            {
              name: 'chinaAdd',
              required: true,
              example: '',
              type: 'object',
              description: '',
              children: [
                {
                  name: 'confirm',
                  value: 321,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 321,
                },
                {
                  name: 'heal',
                  value: 165,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 165,
                },
                {
                  name: 'dead',
                  value: 0,
                  description: '',
                  type: 'number',
                  required: true,
                  example: '',
                },
                {
                  name: 'nowConfirm',
                  value: 156,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 156,
                },
                {
                  name: 'suspect',
                  value: -2,
                  description: '',
                  type: 'number',
                  required: true,
                  example: -2,
                },
                {
                  name: 'nowSevere',
                  value: 0,
                  description: '',
                  type: 'number',
                  required: true,
                  example: '',
                },
                {
                  name: 'importedCase',
                  value: 18,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 18,
                },
                {
                  name: 'noInfect',
                  value: 60,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 60,
                },
                {
                  name: 'localConfirm',
                  value: -67,
                  description: '',
                  type: 'number',
                  required: true,
                  example: -67,
                },
                {
                  name: 'noInfectH5',
                  value: 0,
                  description: '',
                  type: 'number',
                  required: true,
                  example: '',
                },
                {
                  name: 'localConfirmH5',
                  value: 9,
                  description: '',
                  type: 'number',
                  required: true,
                  example: 9,
                },
              ],
            },
            {
              name: 'showAddSwitch',
              required: true,
              example: '',
              type: 'object',
              description: '',
              children: [
                {
                  name: 'all',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'confirm',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'suspect',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'dead',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'heal',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'nowConfirm',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'nowSevere',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'importedCase',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'noInfect',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'localConfirm',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
                {
                  name: 'localinfeciton',
                  value: true,
                  description: '',
                  type: 'boolean',
                  required: true,
                  example: true,
                },
              ],
            },
            {
              name: 'lastUpdateTime',
              value: '2022-02-05 11:52:51',
              description: '',
              type: 'object',
              required: true,
              example: '2022-02-05 11:52:51',
            },
          ],
        },
      ],
      weight: 0,
      uuid: 2,
    };
    let result = eoFormatRequestData(requestInfo, { env: {} }, 'en-US');
    expect(result).toEqual(
      jasmine.objectContaining({
        URL: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
        method: 'GET',
        methodType: '1',
        httpHeader: 0,
        headers: [],
        requestType: '1',
        apiRequestParamJsonType: '0',
        params: '',
        auth: {
          status: '0',
        },
      })
    );
  });
});
