import { CronJob } from 'cron'

export class Server {
  public static start() {
    console.log('Server started...')

    const job = new CronJob(
      '*/5 * * * * *', // cronTime
      () => {
        const date = new Date()
        console.log('5 seconds', date)
      },
    )
    job.start()
  }
}
