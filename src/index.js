import 'better-log/install';

export default function({ Plugin, types: t }) {

  return new Plugin('babel-plugin-inline', {

    visitor: {
      VariableDeclaration(node, parent, scope) {

        const decl = node.declarations[0];
        const callee = decl.init.callee;
        const args = decl.init.arguments;

        if (callee && callee.property.name === 'map') {

          const body = [];
          let fnBody = args[0].body;
          const arr = t.identifier(callee.object.name);

          const index = t.identifier(scope.generateUid('i'));

          body.push(t.variableDeclaration('const', [t.variableDeclarator(
            t.identifier(args[0].params[0].name),
            t.memberExpression(arr, index, true))]));

          if (args[0].params[1]) {

            body.push(t.variableDeclaration('const', [t.variableDeclarator(
              t.identifier(args[0].params[1].name),
              index)]));
          }

          if (args[0].params[2]) {

            body.push(t.variableDeclaration('const', [t.variableDeclarator(
              t.identifier(args[0].params[2].name),
              arr)]));
          }

          if (fnBody.type === 'BlockStatement') {
            let rs = t.identifier('undefined');
            fnBody.body.forEach(function(b) {

              if (b.type === 'ReturnStatement') {
                rs = b.argument;
              } else {
                body.push(b);
              }
            });
            fnBody = rs;
          }

          body.push(t.expressionStatement(t.callExpression(t.memberExpression(
            t.identifier(decl.id.name), t.identifier('push')),
            [fnBody])));

          return [

            t.variableDeclaration(node.kind, [
            t.variableDeclarator(
              t.identifier(decl.id.name), t.arrayExpression([]))
            ]),

            t.forStatement(
              t.variableDeclaration('let', [t.variableDeclarator(index, t.literal(0))]),
              t.binaryExpression('<', index, t.memberExpression(arr, t.identifier('length'))),
              t.updateExpression('++', index, false, t),
              t.blockStatement(body))
          ];
        }
      }
    }
  });
}
