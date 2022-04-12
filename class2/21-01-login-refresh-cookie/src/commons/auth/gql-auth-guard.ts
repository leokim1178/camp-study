import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

//########graphql을 쓸 경우 있어야됨
export class GqlAuthAccessGuard extends AuthGuard('access') {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req; //graphql용 context
    }
}
