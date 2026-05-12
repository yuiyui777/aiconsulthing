import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Mic2,
  Video,
  Users,
  Sparkles,
  FileText,
  Calculator,
  ExternalLink,
} from "lucide-react";

const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
    {children}
  </div>
);

const StatCard = ({ label, value, note }) => (
  <Card>
    <p className="text-sm text-slate-500">{label}</p>
    <p className="mt-2 text-3xl font-bold text-slate-950">{value}</p>
    {note && <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>}
  </Card>
);

const CheckItem = ({ children }) => (
  <li className="flex gap-3 text-slate-700">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
    <span>{children}</span>
  </li>
);

export default function App() {
  const accountLinks = [
    { label: "keito AI Web", url: "https://www.youtube.com/@keitoaiweb" },
    { label: "saki AI eyan", url: "https://www.youtube.com/@saki_AI_eyan" },
    { label: "いまにゅのプログラミング塾", url: "https://www.youtube.com/@imanyu_programming" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight text-slate-950">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white">
              AI
            </span>
            出演パートナー募集
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#role" className="hover:text-slate-950">お願いしたいこと</a>
            <a href="#reward" className="hover:text-slate-950">報酬</a>
            <a href="#fit" className="hover:text-slate-950">向いている方</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden pt-16 md:pt-24">
        <div className="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              AI導入支援サービス立ち上げに伴う募集
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              YouTube・オンライン勉強会の
              <span className="block">出演パートナー募集</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              AI導入支援サービスの集客に向けて、YouTube動画やオンライン勉強会に演者として出演・登壇いただける方を探しています。
              企画・構成・台本・トークスクリプトはこちらで準備します。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reward"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                報酬条件を見る
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#role"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
              >
                依頼内容を見る
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid content-center gap-4"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <p className="text-sm text-slate-300">想定報酬イメージ</p>
                <p className="mt-2 text-5xl font-extrabold">月15万〜40万円</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  固定の出演料に加えて、売上が発生した場合は売上の5%をインセンティブとして還元します。
                </p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <Video className="h-6 w-6 text-slate-950" />
                  <p className="mt-3 text-sm text-slate-500">動画撮影</p>
                  <p className="text-xl font-bold">1本 12,500円</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <Users className="h-6 w-6 text-slate-950" />
                  <p className="mt-3 text-sm text-slate-500">オンライン勉強会</p>
                  <p className="text-xl font-bold">1回 25,000円</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section eyebrow="About" title="今回の募集について">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <p className="text-lg leading-9 text-slate-700">
              現在、AI導入支援サービスの立ち上げに伴い、集客用のYouTubeアカウントを運営していく予定です。
              その中で、YouTube動画やオンライン勉強会に出演・登壇していただける方を募集しています。
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              出演いただく方には、こちらで用意した企画・構成・台本・トークスクリプトをもとにお話しいただく形を想定しています。
              動画内容の企画や台本作成、勉強会の構成作成などはこちらで行うため、大きな準備作業や制作作業をお願いする想定はありません。
            </p>
          </Card>
          <Card className="bg-slate-950 text-white">
            <Mic2 className="h-8 w-8" />
            <p className="mt-5 text-2xl font-bold">演者として話す役割</p>
            <p className="mt-4 leading-7 text-slate-300">
              企画や制作ではなく、準備された内容をもとに、視聴者・参加者へわかりやすく伝えていただく役割です。
            </p>
          </Card>
        </div>
      </Section>

      <Section id="role" eyebrow="Role" title="お願いしたいこと">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
              <Video className="h-6 w-6 text-slate-950" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-950">YouTube動画への出演</h3>
            <p className="mt-4 leading-8 text-slate-700">
              こちらで用意した台本・トークスクリプトに沿って、動画内で説明やトークをしていただきます。
            </p>
          </Card>
          <Card>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
              <Users className="h-6 w-6 text-slate-950" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-950">オンライン勉強会への登壇</h3>
            <p className="mt-4 leading-8 text-slate-700">
              事前にこちらで準備した構成・台本・トークスクリプトに沿って、参加者向けに説明や進行をしていただきます。
            </p>
          </Card>
        </div>
        <Card className="mt-6 bg-slate-100/80">
          <p className="text-lg leading-9 text-slate-700">
            動画や勉強会のテーマ、構成、話す内容、台本、トークスクリプトなどは基本的にこちらで準備します。
            出演者の方にお願いしたいのは、企画作成や資料作成、内容をゼロから考えることではなく、
            <span className="font-bold text-slate-950">こちらで準備した内容をもとに、演者としてわかりやすく話していただくこと</span>です。
          </p>
        </Card>
      </Section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">Reference</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">アカウントのイメージ</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                AIや業務効率化、生成AI活用などについて、わかりやすく発信していくアカウントを想定しています。
              </p>
            </div>
            <div className="grid gap-3">
              {accountLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                >
                  <span className="font-bold text-slate-900">{link.label}</span>
                  <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-slate-950" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="reward" eyebrow="Reward" title="報酬について">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard label="YouTube動画撮影" value="12,500円" note="撮影1本あたりの固定出演料です。" />
          <StatCard label="オンライン勉強会" value="25,000円" note="登壇1回あたりの固定出演料です。" />
          <StatCard label="インセンティブ" value="売上の5%" note="サービス売上に応じて還元します。" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-slate-950" />
              <h3 className="text-xl font-bold">1〜2ヶ月目：売上0円の場合</h3>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">内容</th>
                    <th className="px-4 py-3 font-semibold">計算</th>
                    <th className="px-4 py-3 text-right font-semibold">小計</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-4 py-4 font-medium">動画撮影</td>
                    <td className="px-4 py-4 text-slate-600">12,500円 × 8本</td>
                    <td className="px-4 py-4 text-right font-bold">100,000円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium">オンライン勉強会</td>
                    <td className="px-4 py-4 text-slate-600">25,000円 × 2回</td>
                    <td className="px-4 py-4 text-right font-bold">50,000円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium">インセンティブ</td>
                    <td className="px-4 py-4 text-slate-600">0円 × 5%</td>
                    <td className="px-4 py-4 text-right font-bold">0円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm text-slate-300">合計支払いイメージ</p>
              <p className="mt-1 text-3xl font-extrabold">150,000円</p>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <CircleDollarSign className="h-6 w-6 text-slate-950" />
              <h3 className="text-xl font-bold">3ヶ月目：売上500万円の場合</h3>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">内容</th>
                    <th className="px-4 py-3 font-semibold">計算</th>
                    <th className="px-4 py-3 text-right font-semibold">小計</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-4 py-4 font-medium">出演料</td>
                    <td className="px-4 py-4 text-slate-600">同上</td>
                    <td className="px-4 py-4 text-right font-bold">150,000円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium">インセンティブ</td>
                    <td className="px-4 py-4 text-slate-600">500万円 × 5%</td>
                    <td className="px-4 py-4 text-right font-bold">250,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm text-slate-300">合計支払いイメージ</p>
              <p className="mt-1 text-3xl font-extrabold">400,000円</p>
            </div>
          </Card>
        </div>
      </Section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                <FileText className="h-6 w-6 text-slate-950" />
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">出演者の方にお願いしないこと</h2>
              <p className="mt-4 leading-8 text-slate-700">
                以下のような作業は、基本的にこちらで対応する想定です。
              </p>
              <ul className="mt-6 space-y-3">
                <CheckItem>動画テーマの企画</CheckItem>
                <CheckItem>台本作成・トークスクリプト作成</CheckItem>
                <CheckItem>勉強会の構成作成</CheckItem>
                <CheckItem>話す内容の設計</CheckItem>
                <CheckItem>集客導線やサービス内容の設計</CheckItem>
              </ul>
            </Card>

            <Card id="fit" className="bg-slate-950 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight">こんな方に合いそうです</h2>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />副業を探している方</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />人前で話すことに抵抗がない方</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />YouTubeやオンライン勉強会への出演に興味がある方</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />AIや業務効率化の領域に興味がある方</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />台本をもとにわかりやすく話せる方</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />新しいサービスの立ち上げに関わってみたい方</li>
              </ul>
              <p className="mt-6 leading-8 text-slate-300">
                専門的なAI開発経験が必須というよりは、視聴者や参加者に対してわかりやすく伝えられることを重視しています。
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Section eyebrow="Note" title="補足">
        <Card>
          <p className="text-lg leading-9 text-slate-700">
            報酬条件や稼働量については、初期の想定です。実際の撮影本数、勉強会回数、売上状況、関わり方によって調整する可能性があります。
            詳細は個別に相談しながら決められればと思っています。
          </p>
        </Card>
      </Section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">まずはカジュアルにお話しできれば嬉しいです</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                AI導入支援サービスの立ち上げにあたり、YouTubeやオンライン勉強会を通じて、AI活用に興味がある企業・個人に向けて情報発信をしていく予定です。
                ご興味があれば、まずは一度お話しできればと思います。
              </p>
            </div>
            <a
              href="mailto:yui@archetypedigital.us?subject=出演パートナー募集について"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              連絡する
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
