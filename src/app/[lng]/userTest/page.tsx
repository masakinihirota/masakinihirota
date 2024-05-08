import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  console.log('user情報: ', user);

  return (
    <div className="">
      {user ? <div>ユーザー認証中</div> : <div>未ログイン</div>}
    </div>
  );
}
