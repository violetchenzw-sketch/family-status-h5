# 家里亮着灯｜微信 H5 平安小站（Cloudflare 版）

这是一个手机优先的家人状态页。家人打开同一个链接即可查看最新近况，知道家庭口令的人可以更新状态。页面不会自动获取或分享位置。

## 已有功能

- 微信内直接打开的移动端界面
- 妈妈、爸爸、我的状态卡片
- 6 个带表情的快捷近况
- “我挺好的”一键报平安
- 最近打卡记录与 20 秒自动刷新
- 家庭口令保护更新操作
- 爸妈可二选一趣味表情回复，或输入一行自定义文字
- 回复可通过 PushPlus 微信消息、Bark 或自定义 Webhook 提醒本人
- Cloudflare Workers + KV 云端存储，跨手机同步
- 接口不可用时自动进入本机预览模式

## 先改成你家的称呼

打开 `site/config.js`，可以修改页面标题、问候语和家人称呼。后端目前支持 `mom`、`dad`、`me` 三个成员标识，不要修改这三个 `id`。

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:8888`。本机预览默认家庭口令是 `520520`。

## 发布到 Cloudflare

1. 登录 Cloudflare：

   ```bash
   npx wrangler login
   ```

2. 创建 KV 存储空间，并把返回的 ID 填入 `wrangler.jsonc`：

   ```bash
   npx wrangler kv namespace create FAMILY_STATUS_KV
   ```

3. 设置一个只告诉家人的更新口令：

   ```bash
   npx wrangler secret put FAMILY_EDIT_CODE
   ```

4. 如果希望爸妈回复后在微信里收到提醒，使用 PushPlus 绑定微信后设置 Token：

   ```bash
   npx wrangler secret put PUSHPLUS_TOKEN
   ```

5. 运行 `npm run deploy`，把生成的 `workers.dev` 地址发到家庭微信群即可。

查看页面不需要口令，只有更新状态时需要。建议使用至少 6 位、不要与银行卡或手机解锁密码相同的家庭口令。

## 隐私说明

页面只保存所选的近况、成员标识和更新时间，不请求定位、相机、麦克风或通讯录权限。任何拿到链接的人都能查看状态，因此链接只适合在家人之间分享。
